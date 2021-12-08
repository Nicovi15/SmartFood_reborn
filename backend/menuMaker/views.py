from django.shortcuts import render
from django.http import HttpResponse
from ortools.linear_solver import pywraplp
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.utils import json


# Create your views here.

@api_view(['POST'])
def makeMenu(request):

    data = {}
    values1 = request.data["plat"] or []
    values2 = request.data["accompagnement"] or []
    values3 = request.data["boisson"] or []
    values4 = request.data["dessert"] or []
    calDispo = float(request.data["cal"])
    data['cal'] = calDispo
    data['values1'] = values1
    data['values2'] = values2
    data['values3'] = values3
    data['values4'] = values4
    data['items1'] = list(range(len(values1)))
    data['items2'] = list(range(len(values2)))
    data['items3'] = list(range(len(values3)))
    data['items4'] = list(range(len(values4)))

    # Create the mip solver with the SCIP backend.
    solver = pywraplp.Solver.CreateSolver('SCIP')

    # Variables
    # x[i] = 1 if item i
    x1 = {}
    for i in data['items1']:
        x1[i] = solver.IntVar(0, 1, data['values1'][i]['nom'])
    x2 = {}
    for i in data['items2']:
        x2[i] = solver.IntVar(0, 1, data['values2'][i]['nom'])

    x3 = {}
    for i in data['items3']:
        x3[i] = solver.IntVar(0, 1, data['values3'][i]['nom'])

    x4 = {}
    for i in data['items4']:
        x4[i] = solver.IntVar(0, 1, data['values4'][i]['nom'])

    # Constraints
    # on ne peut prendre qu'au plus un seul item dans chaque value
    solver.Add(sum(x1[j] for j in data['items1']) <= 1)
    solver.Add(sum(x2[j] for j in data['items2']) <= 1)
    solver.Add(sum(x3[j] for j in data['items3']) <= 1)
    solver.Add(sum(x4[j] for j in data['items4']) <= 1)

    # on ne doit pas depasser les cal dispos
    solver.Add(
        sum(x1[i] * float(data['values1'][i]['cal']) for i in data['items1'])
        + sum(x2[i] * float(data['values2'][i]['cal']) for i in data['items2'])
        + sum(x3[i] * float(data['values3'][i]['cal']) for i in data['items3'])
        + sum(x4[i] * float(data['values4'][i]['cal']) for i in data['items4'])
        <= data['cal'])

    # Objective
    objective = solver.Objective()

    for i in data['items1']:
        objective.SetCoefficient(x1[i], float(data['values1'][i]['cal']))
    for i in data['items2']:
        objective.SetCoefficient(x2[i], float(data['values2'][i]['cal']))
    for i in data['items3']:
        objective.SetCoefficient(x3[i], float(data['values3'][i]['cal']))
    for i in data['items4']:
        objective.SetCoefficient(x4[i], float(data['values4'][i]['cal']))

    objective.SetMaximization()

    status = solver.Solve()

    menu = []
    if status == pywraplp.Solver.OPTIMAL:
        print('Total packed value:', objective.Value())

        for i in data['items1']:
            if x1[i].solution_value() == 1:
                menu.append(data['values1'][i])
        for i in data['items2']:
            if x2[i].solution_value() == 1:
                menu.append(data['values2'][i])
        for i in data['items3']:
            if x3[i].solution_value() == 1:
                menu.append(data['values3'][i])
        for i in data['items4']:
            if x4[i].solution_value() == 1:
                menu.append(data['values4'][i])

        print(menu)
    else:
        print('The problem does not have an optimal solution.')

    return HttpResponse(json.dumps(menu))

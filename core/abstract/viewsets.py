from rest_framework import viewsets, filters

class AbstractViewSet(viewsets.ModelViewSet):

    filster_backends = [filters.OrderingFilter]
    ordering_fields = ['updated', 'created']
    ordering = ['-updated']

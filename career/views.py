# job applications list view

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import JobApplicationSerializer, ContactSerializer
from .models import JobApplication, Contact
from django.http import Http404
from rest_framework.permissions import AllowAny


# job applications create view


# class JobApplicationCreateView(APIView):
#     def post(self, request, format=None):
#         serializer = JobApplicationSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data,
#                             status=status.HTTP_201_CREATED)
#         return Response(serializer.errors,
#                         status=status.HTTP_400_BAD_REQUEST)


class JobApplicationCreateView(APIView):
    # permission_classes = (AllowAny,)

    def post(self, request):
        data = request.data
        
        serializer_class = JobApplicationSerializer(data)
        serializer_class.is_valid(raise_exception=True)
        serializer_class.save()
        return Response("success")
    
#list api view
#
class JobApplicationListView(APIView):
    def get(self, request, format=None):
        job_applications = JobApplication.objects.all()
        serializer = JobApplicationSerializer(job_applications, many=True)
        return Response(serializer.data)


# job applications detail view

class JobApplicationDetailView(APIView):
    def get_object(self, pk):
        try:
            return JobApplication.objects.get(pk=pk)
        except JobApplication.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        job_application = self.get_object(pk)
        serializer = JobApplicationSerializer(job_application)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        job_application = self.get_object(pk)
        serializer = JobApplicationSerializer(job_application, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        job_application = self.get_object(pk)
        job_application.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)






class ContactCreateView(APIView):
    def post(self, request, format=None):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,
                            status=status.HTTP_201_CREATED)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST) 
    

class ContactListView(APIView):
    def get(self, request, format=None):
        contacts = Contact.objects.all()
        serializer = ContactSerializer(contacts, many=True)
        return Response(serializer.data)


class ContactDetailView(APIView):
    def get_object(self, pk):
        try:
            return Contact.objects.get(pk=pk)
        except Contact.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        contact = self.get_object(pk)
        serializer = ContactSerializer(contact)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        contact = self.get_object(pk)
        serializer = ContactSerializer(contact, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        contact = self.get_object(pk)
        contact.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
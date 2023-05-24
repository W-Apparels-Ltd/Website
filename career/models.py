from django.db import models

# from phone_field import PhoneField


#create a career model

class JobApplication(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    # phone_number = PhoneField(blank=True,null=True, help_text='Mobile Number (Optional)')
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    cv = models.FileField(upload_to='cv/')
    cover_letter = models.TextField(max_length=1000, blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = 'Job Applications'
        ordering = ['-date']



#contact 

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    # phone_number = PhoneField(blank=True,null=True, help_text='Mobile Number (Optional)')
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    message = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = 'Contact'
        ordering = ['-date']
import pytest
from core.user.models import User


data_superuser = {
    "username": "test_superuser",
    "email": "testsuperuser@gmail.com",
    "first_name": "Test",
    "last_name": "Superuser",
    "password": "test_password"
}

@pytest.mark.django_db
def test_create_superuser():
    user = User.objects.create_superuser(**data_superuser)
    assert user.username == data_superuser["username"]
    assert user.email == data_superuser["email"]
    assert user.first_name == data_superuser["first_name"]
    assert user.last_name == data_superuser["last_name"]
    assert user.is_superuser == True
    assert user.is_staff == True


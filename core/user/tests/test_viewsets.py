from rest_framework import status
from core.fixtures.user import user

class TestUserViewSet:
    endpoint = '/api/user/'

    def test_list(self, client, user):
        client.force_authenticate(user=user)
        response = client.get(self.endpoint)
        assert response.status_code == status.HTTP_200_OK

    def test_retrive(self, client, user):
        client.force_authenticate(user=user)
        response = client.get(self.endpoint + str(user.public_id) + "/")
        assert response.status_code == status.HTTP_200_OK
        assert response.data["id"] == user.public_id.hex

    def test_create(self, client, user):
        client.force_authenticate(user=user)
        data = {}
        response = client.post(self.endpoint, data)
        assert response.status_code == status.HTTP_405_METHOD_NOT_ALLOWED

    def test_update(self, client, user):
        client.force_authenticate(user=user)
        data = {
            "email": "updated_email@gmail.com"
        }
        response = client.patch(self.endpoint + str(user.public_id) + "/", data)
        assert response.status_code == status.HTTP_200_OK
        assert response.data["email"] == data["email"]


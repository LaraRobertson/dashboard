/**
 * Created by lara on 6/5/2021.
 * just fake data
 */

const data = {
    controllers: [
        {
            "id": 1,
            "organization_id": 1,
            "controller_id": 1,
            "title": "Controller 1",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "id": 2,
            "organization_id": 2,
            "controller_id": 2,
            "title": "Controller 2",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "id": 3,
            "organization_id": 1,
            "controller_id": 3,
            "title": "Controller 3",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "id": 4,
            "organization_id": 3,
            "controller_id": 4,
            "title": "Controller 4",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
    ],
    events: [
        {
            "id": 1,
            "event_id": 1,
            "organization_id": 1,
            "controller_id": 1,
            "title": "Event 1",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "id": 2,
            "event_id": 2,
            "organization_id": 2,
            "controller_id": 1,
            "title": "Event 2",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "id": 3,
            "event_id": 3,
            "organization_id": 1,
            "controller_id": 2,
            "title": "Event 3",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "id": 4,
            "event_id": 4,
            "organization_id": 2,
            "controller_id": 2,
            "title": "Event 4",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
    ],
    users: [
        {
            "id": 1,
            "user_id": "63125098f5828f6f95466962",
            "name": "Jane Doe",
            "username": "janedoe",
            "email": "janedoe@mail.com"
        },
        {
            "id": 2,
            "user_id": "6312502d290855877226e536",
            "name": "John Doe",
            "username": "johndoe",
            "email": "johndoe@email.com"
        },
    ],
    organizations: [
        {
            "id": 1,
            "organization_id": 1,
            "user_id": "63125098f5828f6f95466962",
            "name": "Org 1",
            "location": "atlanta",
            "detail": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
            "id": 2,
            "organization_id": 2,
            "user_id": "63125098f5828f6f95466962",
            "name": "Org 2",
            "location": "marietta",
            "detail": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
            "id": 3,
            "organization_id": 2,
            "user_id": "6312502d290855877226e536",
            "name": "Org 2",
            "location": "marietta",
            "detail": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
            "id": 4,
            "organization_id": 3,
            "user_id": "6312502d290855877226e536",
            "name": "Org 3",
            "location": "decatur",
            "detail": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
    ]};

export default data;
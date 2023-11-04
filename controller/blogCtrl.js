const fetch = require('node-fetch')

const getDocumentData = (req, res) => {
    const url = "https://46518947-dcaa-424a-bd9f-4673ff8619b4-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/blogs/collections/events?page-size=10"

    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'X-Cassandra-Token': 'eyJraWQiOiJoYjhfdjVQVW1IQU02T1ZYRVhVMHdoSUZjdE4xT1BuU2ZWUm42UWhEZHFnIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULnBaWkZINmJUczhmYzNHdWFmVVJZY3hHbWtqdHRaNXBaeDhPVWhwRTB6eGMub2FyMTFnNHpjc0QxeG9ucWM2OTciLCJpc3MiOiJodHRwczovL2lkZW50aXR5LmRhdGFzdGF4LmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2OTkwODQzNzksImV4cCI6MTY5OTA4Nzk3OSwiY2lkIjoiMG9hNHAzZXBubjlFZm14WGE2OTciLCJ1aWQiOiIwMHU5MnZwc3ljYU56c2JTZzY5NyIsInNjcCI6WyJvZmZsaW5lX2FjY2VzcyIsInByb2ZpbGUiLCJlbWFpbCIsIm9wZW5pZCJdLCJhdXRoX3RpbWUiOjE2OTkwODQzNzAsInN1YiI6IjJkNTAyMTA3LTFiNTgtNGQzMi05ZjdhLTc4OGRmMzkyYTBiOCIsImVtYWlsIjoic2FuZ29kYXJlaXNhYWM5MkBnbWFpbC5jb20ifQ.EO9_znE9PR5ph3QQzByko1MDW5NcPbWlT5E0HSI3Mir80lX6V89XwK73uoaJV7bPQbfjA0VQEJ8sPRvsQn3pPeqiCtzqEzaKAyhSpW5vnZbOBYZn-HX2ZDJPqN3LqiguATFKTaA6pGFhFabgZST-xtUVseajIpXzaT9ZtBfaIGFkiaCIqEt2WS7W2WVxHo3-HFSf8luswwPfs_gw39aKdJJvl9dzuF8ilaBSxEgnTENBIq-56vHS0akBo6UQU5wM3EO-PijyFVqJsiAREZ24aIWqDlYBan7tWHWVAQx7fqgJgiEvUEt3OQCv1iDpKltZ-d3kPSG24oZaoIPTmaMy_w'
        }
    }
    fetch(url, options)
        .then(response => response.json())
        .then(json => res.json(json))
        .catch(err => console.log('error:' + err))
}


module.exports = {
    getDocumentData
}
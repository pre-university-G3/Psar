export default async function getAllProduct  () {
    return await fetch('https://ishop-api.istad.co/api/v1/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => data)
      .catch(error => console.error('Error:', error));
  };
  
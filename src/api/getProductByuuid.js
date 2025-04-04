export default async function getProductByUuid(uuid) {
  try {
    const response = await fetch(`https://ishop-api.istad.co/api/v1/products/${uuid}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null; // or throw error again if you want to handle it upstream
  }
}

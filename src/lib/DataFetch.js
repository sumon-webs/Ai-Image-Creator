export const getImage = async() =>{
    const res = await fetch('https://ai-image-creator-six.vercel.app/items.json');
    const data = await res.json();
    return data
}
export const Navlinks = [
    {id:1,name:"Video Games", link:"/"},
    {id:2,name:"Contact", link:"/contact"},
]

export const formatDate = (dateString) =>{
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  
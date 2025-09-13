function formatDate(isoString) {
    const date = new Date(isoString);
  
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses son 0-indexados, así que se suma 1
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}/${month}/${day}`;
  }
  
  const isoDate = '2024-06-20T18:01:39.311Z';
  const formattedDate = formatDate(isoDate);
  // TODO revisar este console.log
  // console.log(formattedDate); // 

  export default formatDate
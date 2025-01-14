fetch('https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889')
.then(res=>res.json())
.then((data)=>{
    const item = document.getElementById('item')
    item.innerHTML=''
    data.items.forEach(element => {
        item.innerHTML=`
        
        <tr>
        <td>
        <span class="product_image">
        <img src="${element.image}" alt="${element.name}">
        </span>
        </td>

        <td>
        ${element.title}
        </td>
        <td>
         Rs. ${element.presentment_price}.00
         </td>

        <td class="quantity">
        <span>${element.quantity}</span>
        </td>
        <td style="color:#000" >
        Rs. ${element.presentment_price}.00
        </td>
        
        </tr>

        
        `

        const amount_table = document.getElementById('amount_table')
        amount_table.innerHTML=`
        
        <tr>
        <th>
            Subtotal
        </th>
        <td>
        
        Rs. ${data.original_total_price}.00
        </td>
        </tr>
        <tr>
        <th>
            Total
        </th>
        <td>
        
        Rs. ${data.original_total_price}.00
        </td>
        </tr>

        `
        
    });

})
.catch(err=>console.log(err));
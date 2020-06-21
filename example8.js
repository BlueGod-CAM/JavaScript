function myFunction()
{
    var id,name,qty,price,discount;
    id=parseInt(prompt("Input the ID:"));
    name=prompt("Input the name:");
    qty=parseInt(prompt("Input the qty:"));
    price=parseFloat(prompt("Input the price:"));
    discount=parseFloat(prompt("Input the discount:"));
    var total,payment;
    total=price*qty;
    payment=total-(total*discount)/100;

    alert(id);
    alert(name);
    alert(qty);
    alert(price);
    alert(discount);
    alert(total);
    alert(payment);
}
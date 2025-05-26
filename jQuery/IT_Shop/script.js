$(document).ready(function(){
    count();
    $('.addToCart').click(function(){
        // alert("Hello");
        let id = $(this).data('id');
        let name = $(this).data('name');
        let price = $(this).data('price');

        console.log(id,name,price);

        let items = {
            id: id,
            name: name,
            price: price,
            qty: 1
        }

        let itemString = localStorage.getItem('shops');
        let itemArray;
        if(itemString == null) {
            itemArray = [];
        }else{
            itemArray = JSON.parse(itemString);
        }

        // addToCart တမျိုးထဲကို နှိပ်ရင် Qtyမှာ ထပ်ပေါင်းရန် ပြရန်
        let status = false;
        $.each(itemArray, function(i,v){
            if(id == v.id){
                v.qty++;
                status = true;
            }
        })

        if(status == false){
            itemArray.push(items);
        }

        let itemData = JSON.stringify(itemArray);
        localStorage.setItem('shops',itemData);

        count();
    });

    function count() {
        let itemString = localStorage.getItem('shops');
        if(itemString) {
            let itemArray = JSON.parse(itemString);
            let count = 0;
            $.each(itemArray, function(i,v){
                if(itemArray != 0){
                    count += v.qty;
                    $('#item-count').text(count);
                }else{
                    $('#item-count').text('0');
                }
            })
        }
    }

    // checkout.html

    getData();
    function getData(){
        let itemString = localStorage.getItem('shops');
        if(itemString){
            let itemArray = JSON.parse(itemString);

            let data = '';
            let no = 1;
            let total = 0;
            $.each(itemArray, function(i,v){
                let name = v.name;
                let price = v.price;
                let qty = v.qty;

                data += `<tr>
                            <td>${no++}</td>
                            <td>${name}</td>
                            <td>${price}</td>
                            <td>
                                <button class="min" data-key="${i}"> - </button>
                                ${qty}
                                <button class="max" data-key="${i}"> + </button>
                            </td>
                            <td>${price * qty}</td>
                        </tr>`;

                        total += price * qty;
            })

            data += `<tr>
                        <td colspan="4" align="right">Total</td>
                        <td>${total}</td>
                    </tr>`;

            $('tbody').html(data);
        }
    }

    $('tbody').on('click','.min',function(){
        let key = $(this).data('key');
        // alert(key);

        let itemString = localStorage.getItem('shops');
        if(itemString) {
            let itemArray = JSON.parse(itemString);

            $.each(itemArray,function(i,v){
                if(key == i){
                    v.qty--;
                    if(v.qty == 0){
                        let ans = confirm('Are you sure remove?');
                        if(ans){
                            itemArray.splice(key,1);
                        }else {
                            v.qty = 1;
                        }
                    }
                }
            })

            let itemData = JSON.stringify(itemArray);
            localStorage.setItem('shops',itemData);
            getData();
            count();
        }
    })

    $('tbody').on('click','.max',function(){
        let key = $(this).data('key');
        // alert(key);

        let itemString = localStorage.getItem('shops');
        if(itemString) {
            let itemArray = JSON.parse(itemString);

            $.each(itemArray,function(i,v){
                if(key == i){
                    v.qty++;
                }
            })

            let itemData = JSON.stringify(itemArray);
            localStorage.setItem('shops',itemData);
            getData();
            count();
        }
    })
})
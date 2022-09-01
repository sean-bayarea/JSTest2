function toggleEvenColor() {
    let spanElements = document.querySelectorAll('#numbers span');
    console.log(spanElements);
    spanElements.forEach(function(item) {
        console.log(item.textContent)
        number1=parseInt(item.textContent);
        remain1=number1%2;
        console.log(remain1);
        if (remain1==0) {
            color1= item.style.backgroundColor;
            if (color1==='transparent')
            {
                item.style.backgroundColor = 'yellow';
            }
            else
            {
                item.style.backgroundColor = 'transparent';
            }
            
        }
    
    });
    }
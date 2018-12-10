function increment(selector) {
   let container=$(selector);
   //vsicko zakacame za fragment, a posle nego kum container sus selectora
let fragment=document.createDocumentFragment();
let textArea=$('<textarea>');
let incrementBtn=$('<button>Increment</button>');
let addBtn=$('<button>Add</button>');
let list=$('<ul>');
let clearBtn=$('<button>Clear</button>');
//textarea form
    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', true);
//button form
    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');
    addBtn.addClass('btn');
    addBtn.attr('id','addBtn')

//    list formation
list.addClass('results');
//    izvicva se Event
    $(clearBtn).on('click',function () {
        textArea.val('');
    })
    $(incrementBtn).on('click',function () {
        textArea.val(+textArea.val()+1);
    });
    $(addBtn).on('click',function () {
        let li=$(`<li>${textArea.val()}</li>`);
        li.appendTo(list);
    });
//        zakacame vsicko kum fragment, a nego kum container
    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    clearBtn.appendTo(fragment);
    list.appendTo(fragment);

    container.append(fragment);


}

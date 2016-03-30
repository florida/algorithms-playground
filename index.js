var LinkedList = require('data_structures').LinkedList;

var merge = function (linkedList1, linkedList2) {
  var lnCurr1 = linkedList1.head;
  var lnCurr2 = linkedList2.head;
  var lnPrev1 = null;
  while (lnCurr1 || lnCurr2) {
    if (lnCurr1 && lnCurr1.data <= lnCurr2.data) {
      lnPrev1 = lnCurr1;
      lnCurr1 = lnCurr1.next;
    } else {
      lnPrev1.next = lnCurr2;
      lnPrev1 = lnCurr2;
      linkedList2.head = lnCurr2.next;
      lnCurr2.next = lnCurr1;
      lnCurr2 = linkedList2.head;
    }
  }

  return linkedList1;
};

var linked1 = new LinkedList();
linked1.append(1);
linked1.append(3);
linked1.append(5);
linked1.append(6);
linked1.append(8);

var linked2 = new LinkedList();
linked2.append(2);
linked2.append(4);
linked2.append(7);
linked2.append(9);
linked2.append(12);


var merged = merge(linked1, linked2);
console.log(merged);


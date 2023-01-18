(() => {

    //copy value by ...
    let originalValue = [299, 399, 1299];

    let newValue = [...originalValue];
    newValue[2] = 499;

    // console.log('ค่าเก่า : ' + originalValue);
    // console.log('ค่าใหม่ : ' + newValue);

    //------------------------------------------------

    const birthday = new Date(1984, 7, 22);
    console.log(birthday);


})();

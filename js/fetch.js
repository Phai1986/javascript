(() => {

    async function getData() {
        const api = 'https://reqres.in/api/users?page=';
        const page = document.querySelector('#page');
        const demo = document.querySelector('#demo');

        try {
            if (page.value) {
                const response = await fetch(api + Number(page.value));
                const json = await response.json();
                if (Number(page.value) <= json.total_pages) {
                    const data = json.data;
                    demo.innerHTML = '';
                    data.forEach((res) => {
                        const block = document.createElement('div');
                        block.classList.add('block');

                        const imgProfile = document.createElement('img');
                        imgProfile.src = res.avatar;
                        imgProfile.setAttribute('alt', res.first_name + ' ' + res.last_name);

                        const h3 = document.createElement('h3');
                        h3.innerHTML = res.first_name + ' ' + res.last_name;

                        const email = document.createElement('p');
                        email.innerHTML = res.email;

                        block.prepend(imgProfile, h3, email);
                        block.style.border = '1px solid #000';
                        block.style.padding = '25px';

                        demo.prepend(block);
                        demo.style.textAlign = 'center';
                    });
                } else {
                    alert('Page not found');
                }
            } else {
                alert('Please Not Value');
            }
        }
        catch (err) {
            console.log(err.massage);
            alert(err.message);
        }
    }

    function run() {
        document.querySelector('button').addEventListener('click', getData);
    }

    run();


    // fetch('https://reqres.in/api/users?page=2')
    //     .then((response) => response.json())
    //     .then((json) => {
    //         const data = json.data;
    //         const demo = document.querySelector('#demo');

    //         data.forEach((res) => {
    //             const block = document.createElement('div');
    //             block.classList.add('block');

    //             const imgProfile = document.createElement('img');
    //             imgProfile.src = res.avatar;

    //             const h3 = document.createElement('h3');
    //             h3.innerHTML = res.first_name + ' ' + res.last_name;

    //             const email = document.createElement('p');
    //             email.innerHTML = res.email;

    //             block.prepend(imgProfile, h3, email);
    //             block.style.border = '1px solid #000';
    //             block.style.padding = '25px';

    //             demo.prepend(block);
    //             demo.style.textAlign = 'center';
    //         });
    //     })
    //     .catch((err) => {
    //         console.log(err.massage);
    //     });


})();


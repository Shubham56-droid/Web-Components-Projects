const container = document.querySelector('.container');
const loading = document.querySelector('.loading');

let limit = Math.floor(Math.random() * 10) + 4;
// let limit = 4;
let pageCount = 1;
let postCount = 1;

const getPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$page=${pageCount}`);

    const data = await response.json();
    //console.log(data[0].body);

    data.map((curElm, index) => {
        const htmlData = `
        <div class="posts">
            <p class="post-id">${postCount++}</p>
            <h2 class="title">${curElm.title}</h2>
            <p class="post-info">
            ${curElm.body}
            </p>
        </div>
        `;

        container.insertAdjacentHTML('beforeend', htmlData)
    })

};

getPost();

const showData = () => {
    setTimeout(() => {
        pageCount++;
        getPost();
    }, 400)

}

function showLoading() {
    loading.classList.add('show');

    // load more data
    setTimeout(getPost, 3000);

}


window.addEventListener('scroll', () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (clientHeight + scrollTop >= scrollHeight - 5) {
        // show the loading animation
        setTimeout(showLoading, 1000);

    }

    loading.classList.remove('show');

    // if(scrollTop + clientHeight >= scrollHeight){
    //     //console.log('ssssss');

    //     showData();
    // }
});



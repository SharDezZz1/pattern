let personalInfo = [
    {
        id: '1',
        name: 'John',
        surname: 'Doe',
        middle_name: 'Hohn',
        comments: ['asdfasdf']
    },
    {
        id: '2',
        name: 'Jane',
        surname: 'Doe',
        middle_name: 'Hohn',
        comments: ['asdf']
    },
    {
        id: '3',
        name: 'Peter',
        surname: 'Kowalski',
        middle_name: 'Piiiddi',
        comments: ['asdf']
    }
]

function textToCapitalize(text) {
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

function showUserInfo(content, id) {
    if (id === 'name' || id === "middle_name") {
        content = content[0].toUpperCase() + '.';
    }

    const ELEMENT = document.getElementById(`output__${id}`);
    ELEMENT.innerHTML = textToCapitalize(content);
}

//start func
function getUserInfo(e) {
    const VALUE = e.target.value;
    const ID_ELEMENT = e.target.id;

    showUserInfo(VALUE, ID_ELEMENT);

}

function showPostsOnPage(posts, id) {
    // 1. Forming the HTML for the post
    let html = '';
    let comments = '';
    posts.forEach((post) => {
        post.comments.forEach((comment) => {
            comment += `
                <p>${comment}</p>
            `
        })
        const { id, name, surname, middle_name, comments } = post;
        html += `
            <div id="${id}" class="person__card">
                <div class="person__card_initials">${surname} ${middle_name[0]}. ${name[0]}.</div>
                <p class="person__card_comments">${comments}</p>
                <button class="add_comment_btn">Add comment</button>
            </div>
        `
    })
    // 2. Inserting the HTML into the DOM
    const TARGET = document.getElementById(id);
    TARGET.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    showPostsOnPage(personalInfo, 'posts')

    const ADD_COMMENT_BTN = document.querySelectorAll(".add_comment_btn");
    ADD_COMMENT_BTN.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            alert(";;;")
            const ID = e.target.parentElement.id;
            console.log(ID);
        })
    })
})


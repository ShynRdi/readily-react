import axios from "axios";

// Action Types
export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";

// Action Creators
export const fetchBooksRequest = () => ({
  type: FETCH_BOOKS_REQUEST,
});

export const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

export const fetchBooksFailure = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error,
});

// Async action using Redux Thunk
export const fetchBooks = function () {
  return (dispatch) => {
    const userName = localStorage.getItem("userName");
    dispatch(fetchBooksRequest());

    axios
      .get("https://6347ecf70484786c6e8cea40.mockapi.io/books") // Replace with your API endpoint
      .then((response) => {
        const userData = response.data.filter(
          (item) => item.persons == userName
        );
        dispatch(fetchBooksSuccess(userData));

        // if (userData.length) {
        //   libraryChecker.innerHTML = "";
        // } else {
        //   libraryChecker.querySelector(".loading").remove();
        //   const notFound = document.createElement("p");
        //   notFound.classList.add("not-found");
        //   notFound.innerHTML = "your Library is empty";
        //   libraryChecker.appendChild(notFound);
        // }
        // userData.map((item) => {
        //   const book = document.createElement("div");
        //   const newBook = `
        //   <img
        //     src="../img/icons8-delete-24.png"
        //     alt="${item.id}"
        //     class="edit-button"
        //     onclick="editPandel(event)"
        //     />
        //     <img
        //     src="${item.image}"
        //     alt=""
        //     />
        //     <div>
        //     <p class="book-title">Title:</p>
        //     <p class="book-name">${item.title}</p>
        //     </div>
        //     <div>
        //     <p class="details-title">Details:</p>
        //     <p class="details">${item.details}</p>
        //   </div>`;
        //   book.innerHTML += newBook;
        //   book.classList.add("book");
        //   libraryChecker.appendChild(book);
        // });
      })
      .catch((error) => {
        dispatch(fetchBooksFailure(error.message));
      });
  };
};

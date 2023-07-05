import { useRef } from "react";
// import '../assets/sass/components/_dialogBox.scss';

export default function DialogBox() {
  const dialog = useRef();

  const openDialog = () => {
    dialog.current.showModal();
  };
  const closeDialog = () => {
    dialog.current.close();
  };
  return (
    <>
      <dialog
        id="d"
        ref={dialog}
        onsubmit="handelSubmit(event)"
        className="modal"
      >
        <form action="#" method="dialog" className="modal-content">
          {/* <div className="modal-content"> */}
          <label for="bookName">Book Name</label>
          <input type="text" name="bookName" id="bookName" />

          <label for="bookDetails">Book Details</label>
          <input type="text" name="bookDetails" id="bookDetails" />
          <label for="bookImage">Image URL</label>
          <input type="text" name="bookImage" id="bookImage" />

          <button type="submit" onClick={closeDialog}>
            Store File
          </button>
          <div id="fileData"></div>
          {/* </div> */}
        </form>
        {/* <button >close</button> */}
      </dialog>
      <button onClick={openDialog} className="add-book">
        Add Books
      </button>
    </>
  );
}

import {Post} from "./Post.jsx";
import styles from "./PostList.module.css"
import NewPost from "./NewPost.jsx";
import {useState} from "react";
import {Modal} from "./Modal.jsx";

export function PostList({isPosting, onStopPosting}) {

    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');


    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }
    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value)
    }
    // let modalContent;
    // if (modalIsVisible) {
    //     modalContent = <Modal onClose={hideModalHandler}>
    //         <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
    //     </Modal>
    // }
    // jsx 코드는 변수에도 저장 가능

    return (
        <>
            {/*{modalIsVisible ?( <Modal onClose={hideModalHandler}>*/}
            {/*    <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>*/}
            {/*</Modal>) : false}*/}
            {/*{modalContent}*/}
            {/*변수에 저장했을 땐 변수명만 써도 불러옴 */}
            {isPosting && (
                <Modal onClose={onStopPosting}>
                     <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
                </Modal>)}
            <ul className={styles.posts}>
                <Post author={enteredAuthor} body={enteredBody}/>
                <Post author="sdsd" body="asdddddddddd"/>
            </ul>
        </>
    );

}

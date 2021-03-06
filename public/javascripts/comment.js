
const commentButtons = document.querySelectorAll(".show_comment_button");
if(commentButtons){
    commentButtons.forEach((element) => {
        //console.log(element)
        element.addEventListener('click', async(e)=>{

            //console.log(e)
            const id = element.id.split('-')[1]

           // console.log(id)
            const commentsdiv = document.getElementById(`comment_for_answer-${id}`)
            if (commentsdiv.style["display"] === "block") {
                commentsdiv.style["display"] = "none";
            } else {
                commentsdiv.style["display"] = "block";
            }
         })
    })}



const addComments = document.querySelectorAll('.comment-creation-button')
if(addComments){
    addComments.forEach((element) => {
        element.addEventListener('click', async (e) => {

            const id = e.target.id.split('-')[1]
            const modal = document.getElementById(`commentModal-${id}`)
            modal.style.display='block';
        })
    })}

const cancelComments = document.querySelectorAll('.comment_cancelButton')
if(cancelComments){
    cancelComments.forEach((element) => {
        element.addEventListener('click', async (e) => {

            const id = e.target.id.split('-')[1]
            const modal = document.getElementById(`commentModal-${id}`)
            modal.style.display='none';
        })
    })}


const deleteComment = document.querySelectorAll('.comment_delete')
if(deleteComment){
    deleteComment.forEach((element) => {
        element.addEventListener('click', async (e) => {

            const commentId = e.target.id.split('-')[1]
            const res = await fetch(`/comments/${commentId}`, {
                method: 'DELETE'
            })

            const data = await res.json()
            if (data.message === "Success") {
                const container = document.getElementById(`commentDiv-${commentId}`)
                // const button1 = document.getElementById(`comment_edit_button-${commentId}`)
                // const button2 = document.getElementById(`comment_delete_button-${commentId}`)
                // button1.remove()
                // button2.remove()
                container.remove()
                window.location.reload();
            }
        })
    });
}


const editComments = document.querySelectorAll('.comment_edit')
if(editComments){
    editComments.forEach((element) => {
        element.addEventListener('click', async (e) => {

            const id = e.target.id.split('-')[1]
            const modal = document.getElementById(`editCommentModal-${id}`)
            modal.style.display='block';
        })
    })
    }

const cancelEditComments = document.querySelectorAll('.edit_comment_cancelButton')
if(cancelEditComments){
    cancelEditComments.forEach((element) => {
        element.addEventListener('click', async (e) => {

            const id = e.target.id.split('-')[1]
            const modal = document.getElementById(`editCommentModal-${id}`)
            modal.style.display='none';
        })
    })}

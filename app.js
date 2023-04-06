const github = new Github;
const ui = new UI;
//search input
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup',e => {
    const userText = e.target.value;
    if(userText !== ''){
       github.getusers(userText).then(data => {
        if(data.profileData.message == 'Not Found'){
            //show alert
            ui.showAlert('User not found','alert alert-danger')
        }
        else {
            //show profile
           ui.showProfile(data.profileData);
           //show latest repos
           
           ui.showRepos(data.repos);
            }
       }) 
    } else {
        //clear profile
        ui.clearProfile();
    }
})
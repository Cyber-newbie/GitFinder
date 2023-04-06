class Github {
    constructor() {
        this.client_id = 'ac146daaa2782eb14918';
        this.client_secret = 'f1b64d51bcd36930425f63cd12de74e51ea43735';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getusers(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id = ${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id = ${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await repoResponse.json();
        return {
            profileData,
            repos
        }
    }
}
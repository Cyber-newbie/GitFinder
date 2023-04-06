class Github {
    constructor() {
        this.client_id = '208366aa21b8e4b2e825';
        this.client_secret = '22c97cdced9edf019c87c4528cac045281bc59a5';
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
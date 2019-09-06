class RandomUser {
  constructor(url) {
    this.url = url;
  }
  async fetchUsers(limit) {
    return fetch(`${this.url}/?results=${limit}`)
      .then(response => response.json())
      .then(data => data.results);
  }
}

export default RandomUser;

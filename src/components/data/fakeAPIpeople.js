export default {
    login: data => {
        const {username, password} = data;
        return new Promise((resolve, reject) => {
            if (username === "Kroniki" && password === "qwerty") {
                resolve({
                    username,
                    name: "Jan",
                    surname: "Kowalski",
                    lastLogin: new Date("14/02/1987")
                });
            } else {
                reject("Hasło lub login są nieprawidłowe!");
            }
        });
    }
};

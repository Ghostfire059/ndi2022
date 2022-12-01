const storyData = {
    1 : {
        getText() {
            return "text";
        },
        getOptions() {
            return [
                {
                    name: "option1",
                    redirect: 2,
                },
                {
                    name: "option2",
                    redirect: 3,
                }
            ]
        }
    },
    2 : {
        getText() {
            return "text";
        },
        getOptions() {
            return [{
                name: "option1",
                redirect: 2,
            },
            {
                name: "option2",
                redirect: 3,
            }]
        }
    },
    3 : {
        getText() {
            return "text";
        },
        getOptions() {
            return []
        }
    }
}

// Retourner au choix correct
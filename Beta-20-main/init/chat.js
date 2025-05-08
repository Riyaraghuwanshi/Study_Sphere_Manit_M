const mongoose = require("mongoose");
const Chat = require("../models/discussion");

main()
    .then(() => {
        console.log("connection successeful");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/studysphere");
}

let allChats = [
    { 
        from: 'Alice', 
        to: 'Bob', 
        msg: 'Hey Bob, could you explain the difference between REST and SOAP APIs?', 
        created_at: new Date(), 
    },
    { 
        from: 'Bob', 
        to: 'Alice', 
        msg: 'Sure, Alice! REST is an architectural style, while SOAP is a protocol. REST uses URLs for resources and standard HTTP methods, while SOAP requires XML messaging.', 
        created_at: new Date(), 
    },
    { 
        from: 'Carol', 
        to: 'Alice', 
        msg: 'Alice, are you attending the study session on microservices tomorrow?', 
        created_at: new Date(), 
    },
    { 
        from: 'Alice', 
        to: 'Carol', 
        msg: "Yes, Carol. I'll be there. Can't wait to dive deep into microservices architecture!", 
        created_at: new Date(), 
    },
    { 
        from: 'David', 
        to: 'Everyone', 
        msg: 'Anyone have tips for balancing coursework and personal projects?', 
        created_at: new Date(), 
    },
    { 
        from: 'Carol', 
        to: 'David', 
        msg: 'David, I find using a detailed planner really helps. Breaking down tasks into smaller chunks is key.', 
        created_at: new Date(), 
    },
    { 
        from: 'Eve', 
        to: 'Alice', 
        msg: 'Alice, could you share your notes on the latest JavaScript module?', 
        created_at: new Date(), 
    },
    { 
        from: 'Alice', 
        to: 'Eve', 
        msg: "Sure, Eve. I'll upload them to the forum right away.", 
        created_at: new Date(), 
    },
    { from: 'Frank', 
        to: 'Everyone', 
        msg: 'Does anyone know a good resource for learning GraphQL?', 
        created_at: new Date(), 
    },
    { 
        from: 'Bob', 
        to: 'Frank', 
        msg: 'Frank, you should check out "The Road to GraphQL" book. It\'s quite thorough and beginner-friendly.', 
        created_at: new Date(), 
    },
];

Chat.insertMany(allChats);

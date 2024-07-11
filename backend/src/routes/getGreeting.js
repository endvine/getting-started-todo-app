const GREETINGS = [
    "Whalecome!",
    "All hands on deck!",
    "Charge the course ahead!",
    "Testing"
];
module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length )],
    });
};
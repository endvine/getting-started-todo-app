const GREETINGS = [
    "Whalecome!",
    "All hanss on deck!",
    "Charg the course ahead!",
    "TEsting"
];
module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length )],
    });
};
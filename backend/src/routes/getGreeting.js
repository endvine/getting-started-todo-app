const GREETINGS = [
    "Whale!",
    "All s on deck!",
    "Charg the course ahead!",
    "TEst"
];
module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length )],
    });
};
import userData from "../model/mongo-user_m.js"

export const registerUser = async (req, res) => {
    try {
        const { name, email, mobile, password } = req.body;

        if (!name || !email || !mobile || !password) {
            res.status(400).json({ message: "All feilds are required" })
        }

        const existingUser = await userData.findOne({ email })

        if (existingUser) return res.status(400).json({ message: "Email Already Registered" })

        const user = new userData({ name, email, mobile, password });
        await user.save();

        res.status(201).json({ message: "User Registered Successfully" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error", error: error })
    }
}
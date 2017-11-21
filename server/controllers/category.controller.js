module.exports = (con, resSQL_err) => ({
    getAll: async (req, res) => {    
        con.query(
            `
            SELECT * 
            FROM MenuCategory;
            `, 
        (err, result, fields) => {
        if (err) res.json(resSQL_err)
                res.json({
                    status: true,
                    data: result
                })
            }
        )
    },
    getData: async (req, res) => {
        // let query = "INSERT INTO `Test`(`time`, `date`) VALUES (@time, @date)"
        con.query(
            `
            SELECT * 
            FROM Test;
            `, 
            (err, result, fields) => {
                if (err) res.json(resSQL_err)
                res.json({
                    status: true,
                    data: result
                })
            }
        )
    }
})
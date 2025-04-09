<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Page</title>
    
</head>
<body>

    <h2>Teacher Register</h2>

    <form action="" method="get">
        <table>
            
            <tr>
                <td><label for="username">Username:</label></td>
                <td colspan="3"><input type="text" id="username" name="username" required></td>
            </tr>

        
            <tr>
                <td><label for="email">Email:</label></td>
                <td colspan="3"><input type="email" id="email" name="email" required></td>
            </tr>

            <tr>
                 <td><label for="birthday">Birthday:</label></td>
                 <td><input type="date" id="birthday" name="birthday"></td>
            </tr>

            <tr>
                <td><label for="language">Choose Languages:</label></td>
                <td colspan="3">
                    <select id="language" name="Language[]" multiple>
                        <option value="english">English</option>
                        <option value="bangla">Bangla</option>
                        <option value="turkish">Turkish</option>
                        <option value="german">German</option>
                    </select>
                </td>
            </tr>


            <tr>
                <td><label for="degree">Choose your Degree:</label></td>
                <td>
                    <select id="degree" name="Degree">
                        <option value="mee">MEEE</option>
                        <option value="msc">MSC</option>
                        <option value="ma">MA</option>
                        <option value="mba">MBA</option>
                    </select>
                </td>
                <td><label for="subject">in:</label>
                
                    <select id="subject" name="Subject">
                        <option value="cse">CSE</option>
                        <option value="english">English</option>
                        <option value="architecture">Architecture</option>
                        <option value="accounting">Accounting</option>
                    </select>
                </td>
            </tr>

            <tr>
                <td><label for="degree">Choose your Degree:</label></td>
                <td>
                    <select id="degree" name="Degree">
                        <option value="mee">BArch</option>
                        <option value="bsc">BSC</option>
                        <option value="ba">BA</option>
                        <option value="bba">BBA</option>
                    </select>
                </td>
                <td><label for="subject">in:</label>
                
                    <select id="subject" name="Subject">
                        <option value="cse">CSE</option>
                        <option value="english">English</option>
                        <option value="architecture">Architecture</option>
                        <option value="accounting">Accounting</option>
                    </select>
                </td>
            </tr>
    
            <tr>
                <td><label for="bio">Bio:</label></td>
                <td colspan="3"><textarea id="bio" name="bio" rows="5" cols="40" required></textarea></td>
            </tr>

            
            <tr>
                <td><label for="myfile">Upload CV:</label></td>
                <td colspan="3"><input type="file" id="myfile" name="myfile" required></td>
            </tr>

            
            <tr>
                <td><label for="portfolio">Portfolio Link:</label></td>
                <td colspan="3"><input type="url" id="portfolio" name="portfolio" required></td>
            </tr>

            <tr>
                <td><label for="password">Password:</label></td>
                <td colspan="3"><input type="password" id="password" name="password" required></td>
            </tr>

            <tr>
                <td colspan="4">
                    <input type="submit" value="Register">
                    <input type="reset" value="Reset">
                </td>
            </tr>

            <tr>
                <td colspan="4">
                    Already have an account? <a href="login.php">Login here</a>
                </td>
            </tr>
        </table>
    </form>

</body>
</html>

/**
 * Contains the miscellaneous route handlers.
 * @author Adeshina M. Olorogun <https://github.com/AdeshinaOlorogun>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;

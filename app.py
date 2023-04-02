from flask import Flask, render_template, url_for, request

app = Flask(__name__, template_folder='template')
@app.route("/")#exibir homepage
def home():
    return render_template("home_ext.html")

#colocar o site no ar
if __name__=="__main__":
    app.run(debug=True)
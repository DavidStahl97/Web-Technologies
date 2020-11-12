from flask import Flask, render_template
import json

data = json.load(open('worldl.json'))

app = Flask(__name__)

@app.route("/")
def indexPage():
    return render_template('index.html')

@app.route("/api/country/<int:num>")
def countryPage(num):    
    return data[num]




app.run(debug=True)    
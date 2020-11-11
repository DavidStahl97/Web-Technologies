from flask import Flask, render_template
import json

data = json.load(open('worldl.json'))

app = Flask(__name__)

@app.route("/")
def indexPage():
    duplicate_continents = [c['continent'] for c in data]
    continents = list(dict.fromkeys(duplicate_continents))
    return render_template('index.html', continents = continents)

@app.route("/country/<num>")
def countryPage(num):
    return render_template('country.html', country = data[int(num)])

@app.route("/continent/<continent_name>")    
def continentPage(continent_name):
    country_list = [c['name'] for c in data if c['continent'] == continent_name]
    return render_template('continent.html', continent_name = continent_name, country_list = country_list)

@app.route("/countryByName/<name>")    
def countryByNamePage(name):
    country = next(c for c in data if c['name'] == name)
    return render_template("country.html", country = country)

app.run(debug=True)    
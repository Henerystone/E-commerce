from flask import Blueprint, render_template, request, jsonify, redirect, url_for
home = Blueprint(__name__, "home")

@home.route("main")
def main():
    return render_template("index.html")
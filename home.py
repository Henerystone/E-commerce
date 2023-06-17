from flask import Blueprint, render_template, request, jsonify, redirect, url_for
home = Blueprint(__name__, "home")

@home.route("/")
def main():
    return render_template("index.html")
@home.route("/sales")
def sale():
    return render_template("sales.html")
@home.route("/bulk")
def bulk():
    return render_template("bulk.html")
@home.route("/balance")
def bal():
    return render_template("balance.html")
@home.route("/contacts")
def cont():
    return render_template("contacts.html")
@home.route("/account")
def acc():
    return render_template("account.html")
import streamlit as st
import pandas as pd

st.title("Questionaire")
st.markdown("""
Answer 1 to 2 question in each category
""")

with st.form(key = 'Timemanagement'):
    st.title("Time Management")
    tm1 = st.text_input("What productivity tools do you use?")
    tm2 = st.text_input("Would you describe yourself as an organized person?")
    tm3 = st.text_input("How would you prioritize your duties when asked for extra responsibilities?")
    tm4 = st.text_input("What is your definition of good time management?")
    tm5 = st.text_input("Why do you think it's important to manage your time well?")

    st.title("Leadership")
    l1 = st.text_input("If you are a leader, will you create a system to review the performance of your team members?")
    l2 = st.text_input("What kind of example do you set for your team members?")
    l3 = st.text_input("If you are assigned as a leader of a project, what will be the first thing you do on your team")
    l4 = st.text_input("What approach do you use to motivate your team members?")
    l5 = st.text_input("If any, express a scenario when you are a leader and your teammates make a mistake. How do you handle that situation, and what is the result of that action?")

    st.title("Communication")
    c1 = st.text_input("What is your definition of strong communication?")
    c2 = st.text_input("Why do you think strong communication is essential when working in a team?")
    c3 = st.text_input("How have you handled working under someone you felt was not good at communicating?")
    c4 = st.text_input("Describe your communication skills.")
    c5 = st.text_input("Do you prefer written or verbal communication?")

    st.title("Flexibility")
    f1 = st.text_input("How do you work with people with unique personalities?")
    f2 = st.text_input("How would you react if your supervisor tasked you to learn a new skill?")
    f3 = st.text_input("Would you describe yourself as a flexible person?")
    f4 = st.text_input("Why do you think flexibility is important in a workplace?")
    f5 = st.text_input("How do you adjust to changes that you have no control over?")

    st.title("Accepting Feedback")
    a1 = st.text_input("Give an example of a scenario when you face a harsh critic, either by your supervisors or teammates. How do you handle that situation?")
    a2 = st.text_input("In your opinion, what characteristics are essential for people who easily accept feedback and adapt with them?")
    a3 = st.text_input("Do you prefer giving feedback or accepting feedback from others?")
    a4 = st.text_input("If you need feedback from others, what question do you use to ask them?")
    a5 = st.text_input("What are the benefits from getting the feedback?")

    button = st.form_submit_button(label = 'Submit')
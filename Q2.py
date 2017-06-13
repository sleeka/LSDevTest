#python3.6
#
# Sean Leeka
# Software Engineering Coding Challenge
# Austin, TX
# 6 June 2017

from json import loads, dumps
from random import shuffle
from datetime import datetime

class Q2():
	def __init__(self):
		# load quiz from quiz.json
		with open('quiz.json', 'r') as f:
			# quiz questions and answers
			self.quiz_qa = loads(f.read())

		# load history from history.json
		with open('history.json','r') as f:
			self.quiz_history = loads(f.read())
		
		print("\nPop quiz!")
		self.main_menu()

	def print_history(self):
		print("\n\t\t** HISTORY **\n")
		for timestamp in self.quiz_history.keys():
			scores = self.quiz_history[timestamp]
			score_percent = scores[0]/scores[1]*100
			print(f"{scores[0]}/{scores[1] :<8} ({score_percent}%) \t{timestamp:>15}")

	def erase_history(self):
		print("\t** Erasing history...")
		with open('history.json','w') as f:
			f.write('{}')

	def save_history(self, results):
		timestamp = datetime.now().strftime("%A, %d %B %Y %I:%M:%S%p")
		self.quiz_history[timestamp] = results
		with open('history.json','w') as f:
			f.write(dumps(self.quiz_history))

	def main_menu(self):
		while (True):
			
			print("\n\t** Main Menu **")
			print("\t\t0: Escape to the main menu at any time")
			print("\t\t1: Begin quiz")
			print("\t\t2: View previous scores")
			print("\t\t3: Erase previous scores")
			print("\t\t4: Quit program")
			menu = input("\n\t--> Enter a value for the cooresponding option: ")
			print("\n\n\n")
			try:
				menu = int(menu)
			except:
				print("\tERRONEOUS INPUT!  You must enter an integer between 0 and 4")
				continue

			menu_options = {2 : self.print_history,
							3 : self.erase_history,
							4 : exit
							}

			if (type(menu) is int) and (menu >= 0 and menu <= 4):
				if menu == 0:
					continue
				elif menu == 1:
					results = quiz(self.quiz_qa).results()
					self.save_history(results)
					self.print_history()
				else:
					func = menu_options[menu]()
				
			else:
				print("\tERRONEOUS INPUT!  You must enter an integer between 0 and 4")


class quiz:
	def __init__(self, quiz_qa):
		# copy and shuffle question keys
		self.quiz_qa = quiz_qa['quiz']
		self.q_shuffle = list(self.quiz_qa.keys())
		shuffle(self.q_shuffle)

		# shuffle options
		# remember to maintain option-to-answer connection
		self.options_shuffle = [list(range(len(self.quiz_qa[q]['options']))) for q in self.q_shuffle]
		for opt in self.options_shuffle:
			shuffle(opt)
		
		self.score = [0, len(self.quiz_qa)]

		self.wrong_answers = {}

		# self.a_orders = [range(len(self.quiz_qa[q]['options'])) for q in self.q_shuffle]
		self.print_quiz()
		self.print_results()
		self.print_corrections()

	def results(self):
		return self.score

	def print_quiz(self):
		question_number = 0
		for q in self.q_shuffle:
			print(f"\t{question_number+1})  {self.quiz_qa[q]['question']}")
			# options_shuffle[q] = list(range(len(self.quiz_qa[q]['options'])))
			# shuffle(options_shuffle[q])
			option_number = 97
			for option in self.options_shuffle[question_number]:
				print(f"\t\t{chr(option_number)}) {self.quiz_qa[q]['options'][option]}")
				option_number += 1
			# map(lambda option: print(f"\t\t{option}\n"), [self.quiz_qa[q][a] for a in self.a_orders])
			while True:
				answer_input = input("\t--> Enter the letter of the answer: ")
				print()
				if answer_input == '0':
					self.score[0] = 0
					return
				try:
					answer_input.lower()
					answer_input = ord(answer_input)

				except:
					print("\tINVALID INPUT!")
					continue

				if answer_input < 97 or answer_input > option_number:
					print("\tINVALID INPUT!")
					continue

				# CHECK IF THE ANSWER IS CORRECT
				answer_input -= 97
				if self.options_shuffle[question_number][answer_input] == int(self.quiz_qa[q]['answer'])-1:
					# CORRECT ANSWER!
					self.score[0] += 1
					break
				# WRONG ANSWER
				else:
					self.wrong_answers[question_number+1] = answer_input
					break

			question_number += 1

	def print_results(self):
		score_percent = (self.score[0]/self.score[1])*100
		print("\t\t** RESULTS: **\n")
		print(f"You answered {self.score[0]} correctly out of {self.score[1]} for a score of {score_percent}%")

	def print_corrections(self):
		print("\n\t\t** CORRECTIONS: **\n\n")

		question_number = 1
		for q in self.q_shuffle:
			if question_number in self.wrong_answers.keys():
				print(f"\t{question_number}) {self.quiz_qa[q]['question']}")
				option_number = 97
				for option in self.options_shuffle[question_number-1]:
					print(f"\t\t{chr(option_number)}) {self.quiz_qa[q]['options'][option]}")
					option_number += 1

				answer_int = int(self.quiz_qa[q]['answer'])-1
				answer_str = self.quiz_qa[q]['options'][answer_int]
				selected_answer = self.quiz_qa[q]['options'][self.options_shuffle[question_number-1][self.wrong_answers[question_number]]]
				print(f"Answer: {answer_str} \t\tYou selected: {selected_answer}\n")

			question_number += 1

Q2()
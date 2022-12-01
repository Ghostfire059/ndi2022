def stripLineBreak(string):
	i = len(string) - 1
	while i >= 0 and string[i] == '\n':
		i -= 1
	return string[:i+1]

with open("ndi22.html", 'r') as inputFile:
	with open("output.js", 'w') as outputFile:

		outputFile.write("const storyData = {\n")

		fileContent = inputFile.read()
		fileContent = fileContent.split("<tw-passagedata")

		del fileContent[0]

		for block in fileContent:
			posNameStart = block.find("name=\"") + len("name=\"")
			posNameEnd = block.find("tags=\"") - 2
			blockName = block[posNameStart:posNameEnd]

			contentStart = block.find("\">") + 2
			contentEnd = block.find("</tw-passagedata>")
			blockContent = block[contentStart:contentEnd]

			options = blockContent.split('[[')
			textContent = stripLineBreak(options[0]).replace('\n', "<br>")

			outputFile.write("	" + blockName + " : {\n")
			outputFile.write("		getText() {\n")
			outputFile.write("			return \"" + textContent + "\";\n")
			outputFile.write("		},\n")
			outputFile.write("		getOptions() {\n")
			outputFile.write("			return [\n")

			for i in range(1,len(options)):
				options[i] = options[i].replace("]]", '').replace("[[", '')

				if len(options[i].split("-&gt;")) >= 2:
					optionName = options[i].split("-&gt;")[0]
					optionRedirect = stripLineBreak(options[i].split("-&gt;")[1])
					outputFile.write("				{\n")
					outputFile.write("					name: \"" + optionName + "\",\n")
					outputFile.write("					redirect: \"" + optionRedirect + "\",\n")
					outputFile.write("				},\n")

			outputFile.write("			]\n")
			outputFile.write("		},\n")
			outputFile.write("    },\n")
		outputFile.write("}")
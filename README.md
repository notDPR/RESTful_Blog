# RESTful Blog
This project shows RESTful routing in a form of a simple Blog app.<br>
Prototype : https://still-reef-69131.herokuapp.com

# <h3>7 RESTful Routes</h3>
<table class="table table-hover table-bordered">
			<thead>	
				<tr>
					<th>Name</th>
					<th>Path</th>
					<th>HTTP Verb</th>
					<th>Purpose</th>
					<th>Mongoose Method</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Index</td>
					<td>/blogs</td>
					<td>GET</td>
					<td>List all blogs</td>
					<td>blog.find()</td>
				</tr>
				<tr class="success">
					<td>New</td>
					<td>/blogs/new</td>
					<td>GET</td>
					<td>Show new blog form</td>
					<td>N/A</td>
				</tr>
				<tr class="success">
					<td>Create</td>
					<td>/blogs</td>
					<td>POST</td>
					<td>Create a new blog, then redirect somewhere</td>
					<td>blog.create()</td>
				</tr>
				<tr class="info">
					<td>Show</td>
					<td>/blogs/:id</td>
					<td>GET</td>
					<td>Show info about one specific blog</td>
					<td>blog.findById()</td>
				</tr>
				<tr class="warning">
					<td>Edit</td>
					<td>/blogs/:id/edit</td>
					<td>GET</td>
					<td>Show edit form for one blog</td>
					<td>blog.findById()</td>
				</tr>
				<tr class="warning">
					<td>Update</td>
					<td>/blogs/:id</td>
					<td>PUT</td>
					<td>Update particular blog, then redirect somewhere</td>
					<td>blog.findByIdAndUpdate()</td>
				</tr>
				<tr class="danger">
					<td>Destroy</td>
					<td>/blogs/:id</td>
					<td>DELETE</td>
					<td>Delete a particular blog, then redirect somewhere</td>
					<td>blog.findByIdAndRemove()</td>
				</tr>
			</tbody>
		</table>
    
   # <h3>Resources Used</h3>
   <li><strong>Embedded Javascript Templates : </strong><a href="http://ejs.co/">EJS</a></li>
   <li><strong>PUT and DELETE requests : </strong><a href="https://github.com/expressjs/method-override">Method-Override</a></li>
   <li><strong>Database : </strong><a href="https://mongodb.github.io/node-mongodb-native/">MongoDB</a></li>
   <li><strong>Database Hosting : </strong><a href="https://mlab.com/">mLabs</a></li>
   <li><strong>Front-end Framework : </strong><a href="https://semantic-ui.com/">Semantic UI</a></li>

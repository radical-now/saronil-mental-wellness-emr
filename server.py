#!/usr/bin/env python3
"""
Saronil Mental Wellness Development Server
Serves with Cache-Control: no-store headers so browsers always fetch fresh files.
"""
import http.server
import socketserver

PORT = 8001

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    # Keep access logs visible for debugging
    def log_message(self, format, *args):
        super().log_message(format, *args)

# Allow port reuse to avoid Address Already In Use errors
socketserver.TCPServer.allow_reuse_address = True

with socketserver.TCPServer(("", PORT), NoCacheHandler) as httpd:
    print(f"Saronil Mental Wellness server running at http://localhost:{PORT}")
    print("Press Ctrl+C to stop.")
    httpd.serve_forever()

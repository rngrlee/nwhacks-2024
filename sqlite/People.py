class People:

    def __init__(self, communityID, userID, first, last, email, password):
        self.communityID = communityID #foreign
        self.userID = userID #primary
        self.first = first
        self.last = last
        self.email = email
        self.password = password

    @property
    def getUserID(self):
        return self.userID
    
    @property
    def getCommunityID(self):
        return self.communityID
    
    @property
    def getFirst(self):
        return self.first
    
    @property
    def getLast(self):
        return self.last
    
    @property
    def getEmail(self):
        return self.email
    
    @property
    def getPassword(self):
        return self.password
    
    def __repr__(self):
        return ""
    
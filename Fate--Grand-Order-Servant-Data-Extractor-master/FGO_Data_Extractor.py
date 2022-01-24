import bs4 as bs
import requests
import pandas as pd
import numpy as np
import time

Servant_Data = []

column = ['Name','Alias','Class','ID','Rarity','Drain','Max Servant lvl.','ATK lvl. 1','HP lvl. 1','ATK lvl. at MAX Servant level',
          'HP lvl. at MAX Servant level','ATK lvl. 90','HP lvl. 90','ATK lvl. 100','HP lvl. 100','NP gain','Quick Card Hits','Star Weight','Arts Card Hits','Star Rate',
          'Buster Card Hits','Death Rate','Extra Attack Hits','Attribute','Noble Phantasm Hits','Traits','Illustrator','Voice Actor','Height and Weight','Alignment','Series','Gender',
          'Origin','Region']

rarity = {'★★★ R':'3-Star','★★★★★ SSR':'5-star','★★★★ SR':'4-Star','★★':'2-Star','★':'1-Star','---':'2-Star'}

Servant_count = 277


for i in range(1,Servant_count):
   servdata = []
   'Numbers for Tiamat,Goetia,Solomon and Beast III(L/R) excluded'
   if( i in [149,151,152,168,240]):
      continue
   else:

    print('Current Servant count : ',i)

   'HTTP request to Cirnopedia website'
   req = requests.get('http://fate-go.cirnopedia.org/servant_profile.php?servant=' + str(i),headers={'User Agent': 'Mozilla/5.0'})
   soup = bs.BeautifulSoup(req.content,'lxml')

   'Get contents of the tables in the Servant Profile'
   table = soup.find_all('tbody')

   'Data of the Status table'
   table_rows1 = table[0].find_all('tr')

   for tr in table_rows1:
    td_desc = tr.find_all('td', class_='desc')
    servant_table1 = [str(st1.text.strip()) for st1 in td_desc]
    servdata.extend(servant_table1)
   if (len(servdata) < 14):
       grailval590 = servdata[9:11]
       servdata.insert(11,grailval590[0])
       servdata.insert(12,grailval590[1])
       #print(servdata)
       Servant_Data.extend(servdata)
       #print(Servant_Data)
   else:
       Servant_Data.extend(servdata)


   'Data of the Hidden Stats table'
   table_rows2 = table[1].find_all('tr')

   for tr in table_rows2:
    td_desc = tr.find_all('td',class_='desc')
    servant_table2 = [str(st2.text.strip()) for st2 in td_desc]
    Servant_Data.extend(servant_table2)

   table_rows6 = table[6].find_all('tr')

   for tr in table_rows6:
       td_desc = tr.find_all('td', class_='desc')
       servant_table6 = [str(st2.text.strip()) for st2 in td_desc]
       Servant_Data.extend(servant_table6)

   'Data from the Background 1 table (excluding comment)'
   table_row_9 = table[9].find_all('tr')[:3]

   for tr in table_row_9:
     td_desc = tr.find_all('td',class_='desc')
     servant_table3 = [str(st3.text.strip())for st3 in td_desc]
     Servant_Data.extend(servant_table3)

#print(Servant_Data)

print(len(Servant_Data))

'Create a dataframe to store the values and columns'

df = pd.DataFrame(np.array(Servant_Data).reshape(Servant_count-6,34),columns=column)

df = df[['ID','Name','Alias','Class','Rarity','Drain','Max Servant lvl.','ATK lvl. 1','HP lvl. 1','ATK lvl. at MAX Servant level',
         'HP lvl. at MAX Servant level','ATK lvl. 90','HP lvl. 90','ATK lvl. 100','HP lvl. 100','NP gain','Star Weight','Star Rate','Death Rate','Buster Card Hits',
         'Arts Card Hits','Quick Card Hits', 'Extra Attack Hits','Attribute','Noble Phantasm Hits','Traits','Illustrator','Voice Actor','Height and Weight','Alignment','Series','Gender',
         'Origin','Region']]

new_NP = df['NP gain'].str.split('・',n=1,expand=True)
df['ATK NP gain'] = new_NP[0]
df['DEF NP gain'] = new_NP[1]
df['ATK NP gain'] = df['ATK NP gain'].replace("Attack: "," ",regex=True)
df['DEF NP gain'] = df['DEF NP gain'].replace("Defense: "," ",regex=True)

HandW = df['Height and Weight'].str.split('・',n=1,expand=True)
df['Height'] = HandW[0]
df['Weight'] = HandW[1]

df['Buster Card Hits'] = df['Buster Card Hits'].replace('Hits'," ",regex=True)
df['Arts Card Hits'] = df['Arts Card Hits'].replace('Hits'," ",regex=True)
df['Quick Card Hits'] = df['Quick Card Hits'].replace('Hits'," ",regex=True)
df['Noble Phantasm Hits'] = df['Noble Phantasm Hits'].replace('Hits'," ",regex=True)
df['Extra Attack Hits'] = df['Extra Attack Hits'].replace('Hits'," ",regex=True)

df['Rarity'] = df['Rarity'].replace(rarity)

df['ATK lvl. at MAX Servant level'] = df['ATK lvl. at MAX Servant level'].replace(r'\(.*\)','',regex = True)
df['HP lvl. at MAX Servant level'] = df['HP lvl. at MAX Servant level'].replace(r'\(.*\)','',regex = True)
df['ATK lvl. 90'] = df['ATK lvl. 90'].replace(r'\(.*\)','',regex = True)
df['HP lvl. 90'] = df['HP lvl. 90'].replace(r'\(.*\)','',regex = True)
df['ATK lvl. 100'] = df['ATK lvl. 100'].replace(r'\(.*\)','',regex = True)
df['HP lvl. 100'] = df['HP lvl. 100'].replace(r'\(.*\)','',regex = True)


df = df[['ID','Name','Alias','Class','Rarity','Drain','Max Servant lvl.','ATK lvl. 1','HP lvl. 1',
           'ATK lvl. at MAX Servant level','HP lvl. at MAX Servant level','ATK lvl. 90','HP lvl. 90','ATK lvl. 100','HP lvl. 100',
          'ATK NP gain','DEF NP gain','Star Weight','Star Rate','Death Rate','Buster Card Hits','Arts Card Hits','Quick Card Hits',
          'Extra Attack Hits','Noble Phantasm Hits','Attribute','Traits','Illustrator','Voice Actor','Height','Weight','Alignment','Series','Gender','Origin','Region']]


'Write to a .csv file'

df.to_csv("FGO_Servant_Data.csv",encoding = 'utf-8-sig',index=False)
